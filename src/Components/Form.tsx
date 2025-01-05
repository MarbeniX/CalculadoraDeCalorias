import { Categories } from "../data/Category"

export default function Form() {
    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoría:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                >
                
                {Categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input
                    type="text"
                    id="activity"
                    className="border border-slate-300 p-2 rounded-lg w-full"
                    placeholder="Ej, Comida, jugo de naranja, etc."
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias:</label>
                <input
                    type="number"
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg w-full"
                    placeholder="Calorias. ej. 300 o 500"
                />
            </div>

            <input 
                type="submit" 
                className="bg-black text-white font-bold py-2 px-4 rounded-lg w-full cursor-pointer"
                value="Agregar"
            />
        </form>
    )
}
