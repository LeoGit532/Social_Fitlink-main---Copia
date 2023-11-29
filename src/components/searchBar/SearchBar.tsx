import { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import {
    SearchBarContainer,
    SearchBarBtn,
    SearchBarResults,
    SearchBarHeader,
    SearchBarResult,
} from "./styles";

export function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    async function handleSearch() {
        if (search.length < 3) {
            console.log("Search term must be at least 3 characters");
            return;
        }

        await fetch(`http://localhost:8000/user/search/?q=${search}`, {
        }).then(response => response.json())
        .then(data => {
            setResults(data);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <SearchBarContainer>
            <SearchBarHeader>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onSubmit={handleSearch}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SearchBarBtn onClick={handleSearch}>
                    <FaSearch />
                </SearchBarBtn>
            </SearchBarHeader>
            {results.length > 0 ? (
                <SearchBarResults>
                    { results.map((result) => (
                        <SearchBarResult onClick={() => router.push(`/profile/?user=${result.id}`)}>
                            <img src={result.image} />
                            <div className="name">
                                <div>{result.name}</div>
                                <small>{result.username}</small>
                            </div>
                        </SearchBarResult>
                    ))}
                </SearchBarResults>
            ) : null}
        </SearchBarContainer>
    );
}