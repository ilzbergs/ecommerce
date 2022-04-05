import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";

const StyledSlider = styled.div`
margin-bottom: 55px;
`

const images = [
    { url: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" },
    { url: "https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating_16x9.jpg" },
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg" },
    { url: "https://images.theconversation.com/files/285143/original/file-20190722-11355-1peled7.jpg" },
    { url: "https://images.ctfassets.net/9l3tjzgyn9gr/photo-165355/a4fcf6dc9e5cae625db0d9da9d6066a8/165355-single-male-elephant-in-the-masai-mara.jpg?w=1800&q=50&fm=jpg&fl=progressive" },
];

const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <SimpleImageSlider
                width={300}
                height={200}
                images={images}
                showBullets={true}
                showNavs={true}
                navStyle={1}
            />
        </StyledSlider>
    );
}

export default Slider;