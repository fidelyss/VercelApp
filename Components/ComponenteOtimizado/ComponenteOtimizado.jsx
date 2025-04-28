import { useState, useEffect, useRef } from 'react';

export default function ComponenteOtimizado() {
    const [estaVisivel, setEstaVisivel] = useState(false); // Começa como false para evitar flash inicial
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Atualiza o estado apenas se a visibilidade mudar
                if (entry.isIntersecting !== estaVisivel) {
                    setEstaVisivel(entry.isIntersecting);
                }
            },
            { threshold: 0.1 } // 10% do componente precisa estar visível
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [estaVisivel]); // Dependência adicionada para evitar loops

    // Renderiza o componente apenas se estiver visível
    return estaVisivel ? (
        <div ref={ref} style={{ backgroundColor: 'red' }}>
            <h3>Componente que some e volta magicamente! ✨</h3>
            <p>Ele é desmontado quando sai da tela e remontado quando retorna.</p>
        </div>
    ) : (
        <div ref={ref} style={{ height: "100px" }}></div> // Espaço reservado (placeholder)
    );
}