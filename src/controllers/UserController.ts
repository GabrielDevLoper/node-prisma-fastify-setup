import { PrismaClient } from "@prisma/client";
import {FastifyRequest, FastifyReply} from "fastify";
import { z } from "zod";

const prisma  = new PrismaClient();

export default {
    async index(req: FastifyRequest, reply: FastifyReply) {
        const users = await prisma.user.findMany();
    
        console.log("teste")
    
        return users
    },


    async create(req: FastifyRequest, reply: FastifyReply){
        const createSchemaPayloadUser = z.object({
            name: z.string(),
            email: z.string().email()
        })
        
        const { name, email } = createSchemaPayloadUser.parse(req.body);
        
        await prisma.user.create({
            data: {
                name, 
                email,
            }  
        });
        
        return reply.status(201).send()
    }
  };