import Link from "next/link";

interface MenuProps {
    op1: string;
    op2: string;
}

export const Menu = ({op1, op2} : MenuProps) => {
    return(
        <header>
            <nav className="flex">
                <Link className="font-black" href={"/serverSide"}>{op1}</Link>
                <Link className="font-black" href={"/hookPage"}>{op2}</Link>
            </nav>
        </header>
    )
}
