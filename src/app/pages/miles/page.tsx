import { About } from "../../models/about";

export default function Miles() {
    return (
        <div>
            <About
                image="/png-miles.png"
                imageWidth="600px"
                about="
                    Miles Morales é um jovem adolescente do Brooklyn, Nova York, que se torna o Homem-Aranha após ser mordido por uma aranha radioativa. Filho de um pai policial e uma mãe enfermeira, Miles enfrenta os desafios típicos da adolescência enquanto descobre e aprende a controlar seus novos poderes.
                    "
                videoBack={"/video-back-miles.mp4"}
            />
        </div>
    )
}