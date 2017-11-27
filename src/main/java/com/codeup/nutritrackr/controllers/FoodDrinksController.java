package com.codeup.nutritrackr.controllers;

import com.codeup.nutritrackr.models.FoodDrink;
import com.codeup.nutritrackr.services.FoodDrinks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class FoodDrinksController {
    private FoodDrinks foodDrinks;

    @Autowired
    public FoodDrinksController(FoodDrinks foodDrinks) {
        this.foodDrinks = foodDrinks;
    }

    @GetMapping("/foods/add")
    public String showAddFoodForm(Model model) {
        model.addAttribute("newFoodDrink", new FoodDrink());
        return "foods/add";
    }

    @PostMapping("/foods/add")
    public String addNewFoodDrink(@ModelAttribute FoodDrink foodDrink) {
        foodDrinks.save(foodDrink);
        return "redirect:/foods";
    }

    @GetMapping("/foods/search")
    public String showFoodDrinksSearchFormAndResults() {
        return "foods/search";
    }

    @PostMapping("/foods/search")
    public String showSearchResults(@RequestParam("search-terms") String searchTerms, Model model) {
        model.addAttribute("results", foodDrinks.searchFoodDrinks(searchTerms));
        return "foods/search";
    }
}
