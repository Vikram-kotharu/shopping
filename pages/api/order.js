import React from 'react'
import Order from '@/Models/order'
import connect from '@/db/connet'

connect()

const oders = async(req,res) => {
    const data = req.body
    if(req.method === 'POST'){
        const answer = await Order.create({
            userId: req.body.userId,
            products:req.body.products,
            address: req.body.address,
            amount: req.body.amount,
            status: req.body.status

        })

        res.send(answer)

    }
  
}

export default oders