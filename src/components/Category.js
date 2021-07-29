import React,{useState} from 'react'

const Category = (props) => {
    // console.log(props.data1)
    const [count , setCount] =useState(0);
    const [...all_names] =props.data1.map(get => get.source.name);
    console.log(all_names)
    const unique_result = all_names.filter((c, i) =>{
        return all_names.indexOf(c) === i;
    });
    const all_values=all_names.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    console.log([...all_values.values()])
    const count_result=[...all_values.values()]
    console.log(unique_result, count_result)
    const badges = (names, counts) => {
        let array = [];
        names.map(t => {
            array.push({
                name: t
            })
        })
        counts.map((c, i) => {
            return array[i].count = c;
        })
        return array;
    }
  
    console.log('badges',badges(unique_result, count_result));
    return (
            <div className="card p-3 shadow mt-3">
                <h1>News Category</h1>
                {/* <h2>{props.data1.articles}</h2> */}
                <div>
                {badges(unique_result, count_result).map((q, i) => {
                    return  <button key={i} type="button" className="btn btn-primary m-2">
                {q.name} <span className="badge bg-secondary">{q.count}</span>
                </button>
                })}           
                </div>
            </div>
    )
}
export default Category
