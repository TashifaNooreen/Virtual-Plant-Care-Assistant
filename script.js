function getResponse() {
    const input = document.getElementById("userInput").value.toLowerCase();
    const responseDiv = document.getElementById("response");
  
    let response = "I'm not sure about that. Please try asking another question or be more specific.";
  
    // Extensive responses for plant care
    if (input.includes("water")) {
      response = "Most indoor plants need watering once a week, but always check if the top inch of soil is dry before watering again.";
    } else if (input.includes("sunlight")) {
      response = "Most plants thrive with indirect sunlight. Low-light plants like snake plants can tolerate shade, while succulents need bright light.";
    } else if (input.includes("fertilize")) {
      response = "Use a balanced fertilizer during the growing season, every 4-6 weeks. Reduce fertilizing in winter when growth slows.";
    } else if (input.includes("repot")) {
      response = "Repot every 1-2 years or if roots outgrow the pot. Choose a pot 1-2 inches larger than the current one and refresh the soil.";
    } else if (input.includes("humidity")) {
      response = "Most houseplants thrive at humidity levels around 40-60%. Misting or using a humidity tray can help increase moisture in dry air.";
    } else if (input.includes("yellow leaves")) {
      response = "Yellow leaves often indicate overwatering or poor drainage. Ensure proper soil moisture and that excess water can drain out.";
    } else if (input.includes("brown tips")) {
      response = "Brown tips may indicate low humidity, over-fertilization, or inconsistent watering. Check your routine and adjust as needed.";
    } else if (input.includes("bugs") || input.includes("pests")) {
      response = "Common pests like aphids and spider mites can be treated with neem oil or gentle soap sprays. Check leaves regularly for pests.";
    } else if (input.includes("grow light")) {
      response = "Grow lights are helpful for plants needing bright light indoors. Use for 10-12 hours daily to supplement natural light.";
    } else if (input.includes("prune")) {
      response = "Prune away dead or damaged leaves to encourage growth. Trim carefully to maintain the shape and health of your plant.";
    } else if (input.includes("soil")) {
      response = "Choose well-draining soil. For succulents, cactus soil works best; for other plants, a mix with peat moss and perlite is ideal.";
    } else if (input.includes("temperature")) {
      response = "Most houseplants prefer temperatures between 65-75°F (18-24°C). Avoid placing plants in drafts or near heaters.";
    } else if (input.includes("propagate")) {
      response = "Propagation methods vary by plant. For many, you can root cuttings in water before planting them in soil.";
    } else if (input.includes("winter care")) {
      response = "In winter, reduce watering and stop fertilizing. Provide extra humidity if indoor air is dry and keep plants away from drafts.";
    } else if (input.includes("overwatering")) {
      response = "Overwatering can cause root rot. Ensure soil dries out between waterings and use pots with drainage holes.";
    } else if (input.includes("underwatering")) {
      response = "Underwatered plants often have drooping leaves and dry soil. Gradually increase watering but avoid sudden, heavy watering.";
    } else if (input.includes("flowering")) {
      response = "Flowering plants need ample sunlight and regular feeding. Prune spent blooms to encourage new flowers.";
    } else if (input.includes("leaf drop")) {
      response = "Leaf drop can happen due to sudden temperature changes or improper watering. Ensure stable conditions and consistent care.";
    } else if (input.includes("root rot")) {
      response = "Root rot is often caused by overwatering and poor drainage. Trim affected roots and repot in fresh, well-draining soil.";
    } else if (input.includes("transplant shock")) {
      response = "Transplant shock can occur when repotting. Keep the plant in a stable environment and water gently to help it recover.";
    } else if (input.includes("indoor plant")) {
      response = "Common indoor plants include snake plants, pothos, and ZZ plants. These are hardy and can tolerate lower light conditions.";
    } else if (input.includes("outdoor plant")) {
      response = "Outdoor plants like roses, lavender, and marigolds need more sunlight and space. Ensure they get at least 6 hours of direct sun.";
    } else if (input.includes("pothos")) {
      response = "Pothos are low-maintenance and thrive in indirect light. Water when the top inch of soil is dry and fertilize occasionally.";
    } else if (input.includes("succulent")) {
      response = "Succulents need bright, direct sunlight and minimal water. Use cactus soil for best results and avoid overwatering.";
    } else if (input.includes("snake plant")) {
      response = "Snake plants are tolerant of low light and require infrequent watering. Let soil dry out completely between waterings.";
    } else if (input.includes("aloe vera")) {
      response = "Aloe vera needs bright, indirect light and watering every 2-3 weeks. Use a well-draining soil mix to prevent rot.";
    } else if (input.includes("peace lily")) {
      response = "Peace lilies prefer indirect light and weekly watering. If leaves droop, they likely need more water or humidity.";
    } else if (input.includes("calathea")) {
      response = "Calatheas need high humidity and indirect light. Water when the topsoil is dry, and avoid placing them in direct sunlight.";
    } else if (input.includes("money plant") || input.includes("jade plant")) {
      response = "Money plants prefer indirect light and occasional watering. Allow soil to dry slightly between waterings for best growth.";
    } else if (input.includes("plant toxicity")) {
      response = "Many common plants like pothos, philodendron, and peace lily are toxic to pets. Keep them out of reach of pets and children.";
    } else if (input.includes("orchid")) {
      response = "Orchids thrive in indirect light and need a bark-based potting mix. Water them weekly, allowing roots to dry slightly in between.";
    } else if (input.includes("bonsai")) {
      response = "Bonsai trees need bright, indirect sunlight and consistent moisture. Prune branches to maintain their miniature shape.";
    } else if (input.includes("herbs")) {
      response = "Herbs like basil, parsley, and mint need direct sunlight and moist soil. They grow best in a sunny windowsill.";
    } else if (input.includes("seasonal care")) {
      response = "Seasonal care varies by plant. In winter, reduce watering and fertilizing, while in summer, ensure adequate water and shade.";
    } else if (input.includes("plant growth")) {
      response = "Good plant growth depends on light, water, and nutrients. Rotate plants occasionally for even growth and consider fertilizing.";
    } else if (input.includes("air quality")) {
      response = "Plants like snake plants, peace lilies, and pothos can improve indoor air quality by absorbing toxins and producing oxygen.";
    } else if (input.includes("root care")) {
      response = "Healthy roots are white or light tan. Trim blackened roots and ensure the pot has good drainage to prevent root issues.";
    }
  
    responseDiv.textContent = response;
  }
  