import React, {useEffect, useState} from 'react'
/*
class Foto extends React.Component{

    constructor(){
        super();
        this.state = {
            foto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcincodias.elpais.com%2Fcincodias%2F2016%2F07%2F04%2Flifestyle%2F1467646262_522853.html&psig=AOvVaw0Z6Jth-RtaTyhzhwWc4Iwn&ust=1682101749523000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDIw72Luf4CFQAAAAAdAAAAABAD'
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
      }
      shouldComponentUpdate() {
        return false;
      }

      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
    render(){
        return <div>
            <button onClick={()=>{
                this.setState({ foto:"/logo.svg"})
            }}>cambiar imagen</button>
            <img src={this.state.foto} width={200} height={200} alt='foto'/>
            </div>
    }
}
*/

function Foto(props) {
    const [foto, setFoto] = useState("https://www.shutterstock.com/image-vector/vector-blank-photo-frame-transparent-600w-361689767.jpg")
    const [alt, setAlt] = useState("https://www.shutterstock.com/image-vector/vector-blank-photo-frame-transparent-600w-361689767.jpg")

    useEffect(()=>{
        console.log("componente cambió")
    },[foto])
    var saludo = "hola Amigoooo"
    return <div>
        <button onClick={()=>{
                setFoto("https://www.shutterstock.com/image-photo/vintage-photoalbum-page-79377763")
            }}>cambiar imagen</button>
            <img src={foto} width={200} height={200} alt='foto'/>
            <h4>{saludo}</h4>
    </div>
}

export default Foto