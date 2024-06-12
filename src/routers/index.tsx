import { NavigationContainer } from "@react-navigation/native";
import TabsTopRouter from "./tabs-top.routes";


const Router = () =>{
    return(
        <NavigationContainer>
            <TabsTopRouter/>
        </NavigationContainer>
    )
}

export default Router;