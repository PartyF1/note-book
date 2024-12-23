import { CesarСypherComponent } from "@/components/cesarCypherComponent/CesarCypherComponent"
import { METHODS } from "@/enums/methods"

export default function Encript() {
    return (
        <div>
            <h1>Шифратор</h1>
            <CesarСypherComponent method={METHODS.ENCRYPT}/>
        </div>
    )
}