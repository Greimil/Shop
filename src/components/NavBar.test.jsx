import { cleanup, render , screen} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { NavBar } from './NavBar'; 

describe('NavBar Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(<NavBar/>)
    })

    it('Should render the heading/name logo', () => {
        screen.getByText("PC Componentes")

    });



    it('Should have ul element ', () => {
        screen.getByRole("ul")
 
     });



    it('Should have 3 links ', () => {
        
       expect(screen.getAllByRole("link").length).toBe(3)

    });
    

    
});
