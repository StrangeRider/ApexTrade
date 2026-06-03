import React from "react";
import { render, screen } from "@testing-library/react";    
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";

// Test suite 
describe("Hero Component", () => {
    test("renders Hero component correctly", () => {
        render(<Hero />);
        
        // Check if the image is in the document
        const heroImage = screen.getByAltText(/Hero Image/i);
        expect(heroImage).toBeInTheDocument();
        
        // Check if the heading is in the document
        const heading = screen.getByText(/Invest in everything/i);
        expect(heading).toBeInTheDocument();
        
        // Check if the paragraph is in the document
        const paragraph = screen.getByText(/Online platform to invest in stocks, derivatives, mutual funds, and more/i);
        expect(paragraph).toBeInTheDocument();
        
        // Check if the button is in the document
        const button = screen.getByRole('button', { name: /Signup Now/i });
        expect(button).toBeInTheDocument();
    });

    test("renders Hero component correctly", () => {
        render(<Hero />);
         // Check if the button is in the document
         const button = screen.getByRole('button', { name: /Signup Now/i });
         expect(button).toBeInTheDocument();
         expect(button).toHaveClass('btn btn-primary fs-5 mb-5');
     });
});
