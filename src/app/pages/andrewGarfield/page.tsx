import { About } from "@/app/models/about";

export default function Andrew() {
    return (
        <div>
            <About
                image="/png-andrew.png"
                imageWidth="520px"
                about="
                    Peter Parker é um estudante do ensino médio que vive com sua tia May e seu tio Ben após o desaparecimento de seus pais. Curioso sobre o passado de seus pais, Peter encontra uma maleta que pertenceu a seu pai, levando-o até o laboratório de Oscorp, onde trabalha o cientista Dr. Curt Connors, um ex-colega de seu pai.
                    "
                videoBack={"/video-back-andrew.mp4"}
            />
        </div>
    )
}