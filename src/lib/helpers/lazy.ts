const loaded = new Map();

type node = { setAttribute: (arg0: string, arg1: string) => void; }
type data = { src: string; cl: string, atl: string }

function lazy(node: node, data: data) {
   if (data.src === undefined) {
        node.setAttribute('src', "/images/landing/bar-image.jpeg");
        node.setAttribute('atl', "Placeholder Image for Undefined src");
   } else if (loaded.has(data.src)) {
        node.setAttribute('src', data.src);
    } else {
            const img = new Image();
            img.src = data.src;
            img.onload = async() => {
                loaded.set(data.src, img);
                node.setAttribute('src', data.src); 
                node.setAttribute('class', data.cl);
                node.setAttribute('atl', data.atl);
            }       
    }

    return {
        destroy(){
         // noop
        }
    };
}
export default lazy