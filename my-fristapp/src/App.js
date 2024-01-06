import ButtonComponents from "./components/componet-button"
import ListComponents from "./components/list/list"
import OrderList from "./components/list/orderlist/orderlist"
import TableList from "./table/tables"
import FormList from "./forms/forms"

function app(){
  return(
    <div>
      <h1>app.js</h1>
      
      <ButtonComponents/>
       <ListComponents></ListComponents> 
       <OrderList></OrderList>
       <TableList/>
       <FormList/>
    </div>
  )
}
export default app