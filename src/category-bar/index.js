import React from 'react'
const Index  = ({changeCategory,activecategory}) => {
    const categories = [
    'General',
    "Bussiness",
    'Entertainment',
    'Health',
    'Science',
    'Sports',
    'Technology']

    const clickHandler = (category) => {
        
        changeCategory(category)
    }

    

    return(
        <div className="row row-cols-4" style={{position:"-webkit-sticky"}}>
            {categories.map((category) => {
                if(category.toLowerCase()===activecategory){
                         return(
                             <h6 key={category.toLowerCase()} onClick={() => clickHandler(category.toLowerCase())}><span className="btn  btn-outline-secondary active btn-sm">{category}</span></h6>
                         )
                     }
                    else{
                        return(
                            <h6 key={category.toLowerCase()} onClick={() => clickHandler(category.toLowerCase())}><span className="btn btn-outline-primary btn-sm">{category}</span></h6>
                        )
                    }
            })}
            
            
        </div>
    )

}

export default Index;