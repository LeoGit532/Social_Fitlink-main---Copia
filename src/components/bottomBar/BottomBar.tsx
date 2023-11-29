import { useRouter } from "next/router";
import { FaHome, FaSearch, FaUser, FaPlus } from "react-icons/fa";
import { BottomBarContainer, BottomBarBtn } from "./styles";
import { useAuth } from "../../context/AuthContext";

export default function BottomBar() {
    const router = useRouter();
    const { userId } = useAuth();

    return (
        <BottomBarContainer>
            <BottomBarBtn onClick={() => router.push("/")}>
                <FaHome />
            </BottomBarBtn>
            <BottomBarBtn onClick={() => router.push("/search")}>
                <FaSearch />
            </BottomBarBtn>
            <BottomBarBtn onClick={() => router.push("/create")}>
                <FaPlus />
            </BottomBarBtn>
            <BottomBarBtn onClick={() => router.push("/profile/?user="+userId)}>
                <FaUser />
            </BottomBarBtn>
        </BottomBarContainer>
    )
}