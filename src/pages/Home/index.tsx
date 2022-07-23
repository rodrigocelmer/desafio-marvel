import Table from "../../components/Table";
import DATA from '../../MockData/MOCK_DATA.json'

export default function Home(){
    return(
        <>
            <h1>HOME</h1>
            <Table heroes={DATA.filter((hero)=>hero.first_name)}/>
        </>
    )
}