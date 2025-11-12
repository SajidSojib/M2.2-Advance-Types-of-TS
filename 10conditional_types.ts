type A = null
type B = undefined

type C = A extends null ? 'a' : 'b'     // 'a'
type D = B extends null ? 'a' : 'b'     // 'b'



type RichVehicle = {
    bike: string
    car: string
    plane: string
}
// type CheckVehicle<T> = T extends 'bike'|'car'|'plane' ? true : false
type CheckVehicle<T> = T extends keyof RichVehicle ? true : false

type IsRich = CheckVehicle<'cng'>       //? false
type IsRich2 = CheckVehicle<'car'>      //? true