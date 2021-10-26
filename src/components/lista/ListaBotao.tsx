interface ListaBotaoProps {
    selecionado?: boolean;
    className?: boolean;
    children: any;
    onclick: () => void;
}


export default function ListaBotao(props: ListaBotaoProps) {

    const borda = props.selecionado ? 'border-purple-400' : '';

    return (
        <button onClick={props.onclick} className={`
            text-gray-500 font-semibold hover:text-black
            focus:outline-none ${borda}
            ${props.className}
        `}>
            {props.children}
        </button>
    );
}