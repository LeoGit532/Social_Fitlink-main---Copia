import { useState } from "react";
import { useAuth } from "../src/context/AuthContext";
import { useRouter } from "next/router";
import BottomBar from "../src/components/bottomBar/BottomBar";
import { FaSearch } from "react-icons/fa";
import { SearchBar } from "../src/components/searchBar/SearchBar";

export default function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { userId } = useAuth();

  return (
    <div>
      <FaSearch>
        <SearchBar />
        <BottomBar />
        </FaSearch>
    </div>
  );
}

