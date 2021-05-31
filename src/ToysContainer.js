import React from 'react'
// import toysObj from './database'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

const url ="http://localhost:3000/toys"
// const toys = 
class ToysContainer extends React.Component {

    state = {
        toys: [],
        search:"",
        whatever: "hello"
    }

    addToy = (toyData) => {
        this.setState((prevState, prevProps) => {
            return{
                toys: [...prevState.toys, toyData]
            }

        })
    }

    increaseLikes= (id) =>{
        console.log(id)
        const toy = this.state.toys.find((t) => id === t.id)

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({likes: toy.likes + 1})
        }

        fetch(`${url}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            this.setState((prevState)=> {

                const idx= prevState.toys.findIndex((t) => id === t.id)

                return{
                    toys: [...prevState.toys.slice(0,idx),json, ...prevState.toys.slice(idx +1)]
                }
            })
        })

    }

    makeToyCards(){
        let displayedToys = this.state.toys
        console.log(this.state.search)
        if(this.state.search){
            displayedToys = this.state.toys.filter((toy) => 
            toy.name.toLowerCase().includes(this.state.search.toLowerCase()))
        }

        return displayedToys.map(toy => <ToyCard  increaseLikes={this.increaseLikes} key={toy.id}  toy={toy} />)
    }


    componentDidMount(){
         console.log("I did called")
         const url ="http://localhost:3000/toys"
         fetch(url)
        .then(res=> res.json())
        .then(json => {
             //deal with json
            console.log(json)
             this.setState({
                 toys: json
             })
        })
    }
    
    handleInputChange = (e)=> {
        console.log(e.target.value)
        const search = e.target.value
        this.setState({search: search})

    }
    render (){
        return(
        <div id="toy-container">
            <div>
                <h1>Add New Toy</h1>
                <ToyForm addToy ={this.addToy}/>
                <br></br>

            </div>
            <div>
                <input type="text" placeholder="Search for a Toy..." onChange={this.handleInputChange} />
            </div>
            {this.makeToyCards()}
            
        </div>

        )

    }
    
}

export default ToysContainer
