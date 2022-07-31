import React, { Component } from 'react'

const data = [{
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "url": "./glassesImage/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "url": "./glassesImage/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "url": "./glassesImage/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "url": "./glassesImage/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "url": "./glassesImage/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "url": "./glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "url": "./glassesImage/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
},
{
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "url": "./glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
}]




export default class Content extends Component {

    state = {
        currentGlass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }

    }

    renderGlass=()=>{
        return data.map((glassItem,index)=>{
            return <img key={index} className='me-4 border' onClick={()=>{ this.changeGlass(glassItem) }} style={{ width: 100, height: 40 }} src={glassItem.url} alt="..." />
        })
    }

    changeGlass=(glassItem)=>{
        this.setState({
          currentGlass:glassItem
           
        })
    }

   

    render() {
        return (
            <div className='content'>
                <div style={{ minHeight: '100vh', background: 'rgba(0,0,0,0.5)' }}>
                    <div className="model container d-flex pt-5">
                        <div className="col-left col-6 text-center">
                            <img style={{ width: 300, height: 350 }} src="./glassesImage/model.jpg" alt="..." />
                            <img className='glass-active' style={{ width: 160, height: 40 }} src={this.state.currentGlass.url} alt="..." />
                            <div className="description p-2 text-start">
                                <p className='fs-5 fw-bold text-info'>{this.state.currentGlass.name}</p>
                                <span className='fw-semibold'>{this.state.currentGlass.desc}</span>
                            </div>
                        </div>
                        <div className="col-right col-6  text-center">
                            <img style={{ width: 300, height: 350 }} src="./glassesImage/model.jpg" alt="..." />
                        </div>
                    </div>

                    <div className="list-glass bg-light mt-5 p-5 text-center container">
                        {/* <img className='me-4 border' style={{ width: 100, height: 40 }} src="./img/v1.png" alt="..." /> */}

                        {this.renderGlass()}


                    </div>
                </div>

            </div>
        )
    } s
}
