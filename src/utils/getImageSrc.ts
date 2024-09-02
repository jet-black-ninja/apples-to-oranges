function getImageSrc(slug:string):string {
    if(slug ==="kiwi"){
        return './images/kiwi-fruit.png';
    }
    if(slug ==="pumpkin"){
        return "./images/jack-o-lantern.png";
    }

    const imgSrc = `/images/${slug}.png`;
    return imgSrc;
}
export default getImageSrc;