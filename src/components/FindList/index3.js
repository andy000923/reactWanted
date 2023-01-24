import { useState } from "react";
import axios from "axios";

const Cate = () => {
    const [data, setData] = useState(null);

    const onClick = () => {
        axios.get('https://sohee.shop/categories').then(response=>{
            setData(response.data); 
        });
};
return(
    <div>
        <div>
            <button onClick={onClick}>call</button>
        </div>
        {data&&<textarea rows={11} value={JSON.stringify(data.result,null,2)} readOnly={true}/>}
    </div>
)
}

export default Cate;