import z from "zod";

export const CreateOrderSchema = z.object({
    marketId: z.string(),
    side: z.enum(["yes", "no"]),
    type: z.enum(["buy", "sell"]),
    price: z.int(),  //10 => 0.10$
    qty: z.int()    //10 => 10 qty
})

export type Orderbook = {[key: string]: {
    availableQty: number,
    orders: { userId: string, qty: number, filledQty: number, originalOrderId: string, reverseOrder: boolean}[]
}}

export const SplitSchema = z.object({
    marketId: z.string(),
    amount: z.number() // 1 => 1
})

export const OnrampSchema = z.object({
    amount: z.number()
     .refine(val => Number.isFinite(val) && val >= 0, { 
       message: "Amount must be a non-negative finite number" 
     })
     .refine(val => Math.round(val * 100) === val * 100, { 
       message: "Amount cannot have more than 2 decimal places" 
     }) // amount in USD (e.g., 100.50)
})

export const OfframpSchema = z.object({
    amount: z.number()
    .refine(val => Number.isFinite(val) && val >= 0, { 
       message: "Amount must be a non-negative finite number" 
     })
     .refine(val => Math.round(val * 100) === val * 100, { 
       message: "Amount cannot have more than 2 decimal places" 
     }) // amount in USD (e.g., 100.50) 
})