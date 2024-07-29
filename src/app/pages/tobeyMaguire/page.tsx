import { About } from "@/app/models/about";

export default function Tobey() {
    return (
        <div>
            <About
                image="/png-tobey.png"
                imageWidth="410px"
                about="
                    Peter Parker (Tobey Maguire) é um jovem estudioso que vive com seus tios, Ben (Cliff Robertson) e May (Rosemary Harris), desde que seus pais faleceram. Inteligente e com um grande interesse pela ciência, Peter tem dificuldade em se relacionar com seus colegas, por ser tímido e por eles o considerarem um nerd. Até que, em uma demonstração científica, um acidente inesperado faz com que aranha modificada geneticamente pique Peter.
                    "
                videoBack={"/video-back-tobey.mp4"}
            />
        </div>
    )
}