import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach,afterEach, describe , expect, it} from "vitest";
import { Products } from "./Products";


describe('Product Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(<Products/>)
    })


    it('Should have a NavBar', () => {
       
        screen.getByTestId("nav")

    });
    
});
