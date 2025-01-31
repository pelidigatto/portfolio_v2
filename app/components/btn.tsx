interface BtnProps {
    className: string;
    href: string;
    text:string;
    title:string;
}

import Link from 'next/link';

const Btn = (props: BtnProps) => { 
    return(
        <Link className={`${props.className}`} href={`${props.href}`} title={`${props.title}`}>{`${props.text}`}</Link>
    )

}


export default Btn;