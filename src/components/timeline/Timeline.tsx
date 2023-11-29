import { PostsContainer, TimelineContainer } from "./styles";
import { TimelinePost } from "../timelinePost/TimelinePost";

interface TimelineProps {
    posts: any[];
}

export default function Timeline({ posts }: TimelineProps) {
    return (
        <TimelineContainer className="ALgumacoisa">
            <PostsContainer>
                {posts.length ? posts.map((post) => (
                    <TimelinePost postItem={post} key={post.id} />
                )) : (
                    <>
                        <p>Não há publicações disponíveis.</p>
                        <p>Siga novos usuários para receber publicações deles</p>
                    </>
                )}
            </PostsContainer>
        </TimelineContainer>
    )
}