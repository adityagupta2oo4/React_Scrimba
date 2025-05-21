
const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

export default function Main(){


    const IngredientList = ingredients.map((item)=>{
        return(
            <li key = {item}>{item}</li>
        )
    })

    //handler
    function handleAdd(event){
        event.preventDefault(); // to stop from refreshing and url change
        alert("Add button clicked")
        //getting the data from form
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient") // you pass the input name in it



    }
    return(

        <main>
            <form  onSubmit= {handleAdd} className="add-ingredient-form">
                <input 
                aria-label="Add ingredient"
                type = "text"
                placeholder="e.g oregano"
                 name="ingredient"
                 />
                <button></button>
            </form>
            {IngredientList}
        </main>
    )
}