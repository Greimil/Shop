import { cleanup, render , screen} from '@testing-library/react';
import { afterEach, describe, it, beforeEach } from 'vitest';
import { Home } from './Home';

describe('home Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(<Home/>)
    })
   

    it('Home page should have a Navbar', () => {
        screen.getByTestId("nav")

    });


    it('Should have a button', () => {
        screen.getByRole("button", {name: /ver productos/i})

    });
 
    
    it('should  have a footer', () => {
        screen.getByRole("contentinfo")
    });
    
    





});
