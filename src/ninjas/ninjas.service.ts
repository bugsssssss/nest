import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        {id:0, name: 'ninjaA', weapon:"stars"},
        {id:1, name: 'ninjaB', weapon:"nunchaks"},
    ]

    getNinjas(weapon?: "stars" | "nunchaks") {
        if (weapon) {
            return this.ninjas.filter((ninja)=> ninja.weapon === weapon)
        }

        return this.ninjas
    }

    getNinja(id:number) {
        const ninja = this.ninjas.find((ninja)=>ninja.id === id);
        if (ninja) {
            return ninja
        }
        throw new Error('Ninja not found')
    }


    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...createNinjaDto,
            id: this.ninjas.length,
        }
        this.ninjas.push(newNinja);
        
        return newNinja;
    }

    updateNinja(id:number, updateNinjaDto: UpdateNinjaDto) {
        this.ninjas = this.ninjas.map((ninja) => {
            if (ninja.id === id) {
                // basically replacing the old data of ninja with new data
                return {
                   ...ninja,
                   ...updateNinjaDto,
                }
            }
            return ninja;
            
        })
    }

    removeNinja(id:number) {
        const toBeRemoved = this.getNinja(id)

        this.ninjas = this.ninjas.filter((ninja) => ninja.id!== id)

        return toBeRemoved;
    }

}
