import * as S from "./styles"

export default function Button ({children, ...props}){
    return(
        <S.Button {...props}>{children} </S.Button>
    )
}