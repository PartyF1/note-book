import { CesarСypherComponent } from "@/components/cesarCypherComponent/CesarCypherComponent";
import { METHODS } from "@/enums/methods";

export default function Decript() {
    return (
        <div>
            <h1>Взломщик</h1>
            <CesarСypherComponent method={METHODS.HACK} />
        </div>
    )
}