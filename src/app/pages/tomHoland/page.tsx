import { About } from "../../models/about";

export default function TomHoland() {
    return (
        <div>
            <About
                image="/png-tom.png"
                imageWidth="400px"
                about="
                    Peter Parker, interpretado por Tom Holland, é um adolescente do Queens, Nova York, que equilibra sua vida escolar e pessoal com suas atividades como o super-herói Homem-Aranha. Diferente das versões anteriores, esta iteração do personagem é integrada ao Universo Cinematográfico Marvel (MCU), onde Peter é descoberto e recrutado por Tony Stark (Homem de Ferro) para se juntar aos Vingadores.

                    Após ser mordido por uma aranha.
                    "
                videoBack={"/video-back-tom.mp4"}
            />
        </div>
    )
}