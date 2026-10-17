import CocktailCard from "./CocktailCard/CocktailCard";
import css from "./CocktailList.module.css";

const coctails = [
  {
    _id: "639b6de9ff77d221f190c61d",
    drink: "Stone Sour",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Stone_Sour.jpg",
    description:
      "Stone Sour is a tangy and citrusy cocktail that's perfect for those who enjoy the lively and refreshing flavors of citrus fruits. This spirited concoction combines whiskey with orange liqueur and lemon juice, creating a zesty and invigorating libation. It's a cocktail that's known for its bright and tangy qualities, making it a favorite choice for those who love a citrus kick. Sip on a Stone Sour and embrace the zestiness of this classic drink.",
  },
  {
    _id: "639b6de9ff77d221f190c533",
    drink: "Orangeade",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Orangeade.jpg",
    description:
      "Orangeade is a refreshing and citrusy mocktail that showcases the natural sweetness of freshly squeezed orange juice. It's a simple yet delightful drink that combines the bright flavors of oranges with the effervescence of sparkling water. This non-alcoholic treat is perfect for all ages and occasions. Savor the crisp and invigorating taste of Orangeade and quench your thirst in the most refreshing way.",
  },
  {
    _id: "639b6de9ff77d221f190c5b4",
    drink: "Casino",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Casino.jpg",
    description:
      "A delicious recipe for Casino, with gin, maraschino liqueur, lemon juice and orange bitters. Also lists similar drink recipes.",
  },
  {
    _id: "639b6de9ff77d221f190c537",
    drink: "Old Fashioned",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Old_Fashioned.jpg",
    description:
      "Old Fashioned is a timeless and classic cocktail that has stood the test of time. It features the rich flavors of bourbon, muddled sugar, aromatic bitters, and a hint of citrus from an orange twist. This simple yet sophisticated drink is a perfect choice for those who appreciate the elegance of a traditional cocktail. Take a step back in time and savor the flavors of an Old Fashioned.",
  },
  {
    _id: "639b6de9ff77d221f190c629",
    drink: "Sweet Sangria",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Sweet_Sangria.jpg",
    description:
      "Sweet Sangria is a fruity and refreshing sangria that's perfect for those who love the vibrant flavors of Spanish-style wine punches. This delightful drink combines red wine with a medley of fruits, typically including citrus slices, apples, and berries, along with a touch of sweetness from sugar or fruit liqueur. It's a cocktail that's ideal for warm days and festive gatherings. Raise a glass of Sweet Sangria and enjoy its fruity and vibrant essence.",
  },
  {
    _id: "639b6de9ff77d221f190c554",
    drink: "Port And Starboard",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Port_And_Starboard.jpg",
    description:
      "Port And Starboard is a maritime-inspired cocktail that brings together a combination of light and dark spirits to create a balanced and flavorful drink. This intriguing cocktail features a mix of gin, rum, and grenadine, resulting in a visually appealing layered drink. Savor the flavors of Port And Starboard and let it transport you to the open seas.",
  },
  {
    _id: "639b6de9ff77d221f190c59a",
    drink: "Lord And Lady",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Lord_And_Lady.jpg",
    description:
      "Lord And Lady is a refined and sophisticated cocktail that embodies elegance and grace. This well-crafted drink combines the richness of whisky with the herbal complexity of an herbal liqueur, balanced by a touch of sweetness. The result is a smooth and balanced cocktail that exudes refinement and sophistication. Sip on a Lord And Lady and let its aristocratic flavors transport you to an upscale setting.",
  },
  {
    _id: "639b6de9ff77d221f190c5ad",
    drink: "Homemade Kahlua",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Homemade_Kahlua.jpg",
    description:
      "Homemade Kahlua is a delightful and versatile coffee liqueur that you can make in the comfort of your own home. This homemade version combines the richness of coffee with the warmth of rum and a touch of sweetness from sugar or caramel. The result is a smooth and indulgent liqueur that can be enjoyed on its own, added to coffee or cocktails, or used in dessert recipes. Savor your Homemade Kahlua and enjoy the pride of creating your own signature liqueur.",
  },
  {
    _id: "639b6de9ff77d221f190c544",
    drink: "Pegu Club",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Pegu_Club.jpg",
    description:
      "Pegu Club is a citrusy and aromatic cocktail that combines the flavors of gin, orange liqueur, lime juice, and a dash of Angostura bitters. This refreshing and well-balanced drink offers a perfect harmony of sweet, tart, and bitter notes. Sip on a Pegu Club cocktail and let its delightful flavors transport you to a classic cocktail lounge.",
  },
  {
    _id: "639b6de9ff77d221f190c519",
    drink: "Ace",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Ace.jpg",
    description:
      "Ace is a refreshing and citrusy cocktail that features the bright flavors of vodka, lemon juice, and a splash of soda water. It's a light and bubbly drink that is perfect for summer gatherings or as a refreshing aperitif. Sip on an Ace cocktail and enjoy the zingy and invigorating flavors that will leave you feeling refreshed and revitalized.",
  },
  {
    _id: "639b6de9ff77d221f190c5a0",
    drink: "Long Island Iced Tea",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Long_Island_Iced_Tea.jpg",
    description:
      "Long Island Iced Tea is a potent and notorious cocktail that's famous for its mix of five different spirits and a splash of cola. This iconic drink is known for its strong and boozy character, making it a favorite among those seeking a powerful libation. It's a cocktail that's not for the faint of heart, so sip responsibly and prepare for a memorable evening.",
  },
  {
    _id: "639b6de9ff77d221f190c573",
    drink: "Dirty Nipple",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Dirty_Nipple.jpg",
    description:
      "Dirty Nipple is a playful and indulgent cocktail that combines the rich flavors of coffee liqueur and Irish cream with a splash of grenadine for added sweetness. It's a delightful drink that is perfect for parties or as a fun treat. Raise a glass of Dirty Nipple and let its creamy and sweet flavors bring a smile to your face.",
  },
  {
    _id: "639b6de9ff77d221f190c652",
    drink: "Kiwi Papaya Smoothie",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Kiwi_Papaya_Smoothie.jpg",
    description:
      "Kiwi Papaya Smoothie is a fruity and tropical smoothie that's perfect for those who love the refreshing and exotic flavors of tropical fruits. This delightful blend combines kiwi, papaya, and yogurt, creating a creamy and revitalizing drink that's perfect for breakfast or as a midday pick-me-up. It's a smoothie that's known for its vibrant colors and tropical vibes, making it a favorite choice for those who enjoy a taste of the tropics. Sip on a Kiwi Papaya Smoothie and let the fruity goodness brighten your day.",
  },
  {
    _id: "639b6de9ff77d221f190c521",
    drink: "Abilene",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Abilene.jpg",
    description:
      "Abilene is a whiskey-based cocktail that offers a delightful balance of sweet and sour flavors. This classic drink combines whiskey, vermouth, and a touch of sweet grenadine, resulting in a sophisticated and well-rounded beverage. Sip on an Abilene cocktail and let the smooth whiskey and subtle sweetness transport you to a cozy lounge.",
  },
  {
    _id: "639b6de9ff77d221f190c587",
    drink: "Vodka Martini",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Vodka_Martini.jpg",
    description:
      "A delicious recipe for Vodka Martini, with vodka, dry vermouth and olive. Also lists similar drink recipes.",
  },
  {
    _id: "639b6de9ff77d221f190c50c",
    drink: "Imperial Cocktail",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Imperial_Cocktail.jpg",
    description:
      "Imperial Cocktail is a citrusy and flavorful drink that features the flavors of gin, maraschino liqueur, orange juice, and lime juice. This vibrant and well-balanced cocktail offers a perfect blend of sweet, tart, and fruity notes. Sip on an Imperial Cocktail and let its refreshing flavors whisk you away to a tropical escape.",
  },
  {
    _id: "639b6de9ff77d221f190c697",
    drink: "English Highball",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/English_Highball.jpg",
    description:
      "English Highball is a classic and refreshing cocktail that's perfect for those who appreciate the timeless appeal of Scotch whisky-based drinks. This iconic libation combines Scotch whisky with ginger ale, creating a crisp and invigorating drink with a touch of sweetness and a hint of spicy warmth. It's a cocktail that's known for its Scotch essence and the effervescent refreshment of ginger ale, making it a favorite choice for those who want to enjoy a classic libation with a twist. Sip on an English Highball cocktail and raise a glass to the enduring spirit of this beloved drink.",
  },
  {
    _id: "639b6de9ff77d221f190c654",
    drink: "Zorro",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Zorro.jpg",
    description:
      "Zorro is a bold and fiery cocktail that's perfect for those who crave intense and spicy flavors. This daring libation combines tequila with black sambuca and hot sauce, creating a potent and exhilarating drink that's not for the faint of heart. It's a cocktail that's known for its heat and boldness, making it a favorite choice for those who enjoy a fiery kick in their drinks. Sip on a Zorro and embrace the heat.",
  },
  {
    _id: "639b6de9ff77d221f190c62c",
    drink: "Frosé",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Frose.jpg",
    description:
      "Frosé is a frozen and icy cocktail that's perfect for those who enjoy the refreshing qualities of a frozen drink. This delightful concoction combines rosé wine with strawberry puree, creating a slushy and fruity libation. It's a cocktail that's ideal for cooling down on hot summer days or for indulging in a frozen treat with a grown-up twist. Sip on a Frosé and embrace the frosty deliciousness.",
  },
  {
    _id: "639b6de9ff77d221f190c531",
    drink: "Orgasm",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Orgasm.jpg",
    description:
      "Orgasm is a creamy and indulgent cocktail that lives up to its name. It features the velvety smoothness of amaretto, the rich flavors of coffee liqueur and Irish cream, and a touch of whipped cream for a luscious finish. Sip on an Orgasm cocktail and let its seductive flavors awaken your senses and ignite your taste buds.",
  },
  {
    _id: "639b6de9ff77d221f190c585",
    drink: "Vodka Slime",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Vodka_Slime.jpg",
    description:
      "Vodka Slime is a zesty and tangy cocktail that's perfect for those who love a burst of citrus flavor. This lively concoction combines vodka with a mix of citrus juices, including lemon and lime, and is topped off with a splash of soda for a refreshing fizz. It's a drink that's sure to tickle your taste buds and brighten your day. Raise a glass of Vodka Slime and enjoy the zingy goodness.",
  },
  {
    _id: "639b6de9ff77d221f190c685",
    drink: "Gin Smash",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Gin_Smash.jpg",
    description:
      "Gin Smash is a refreshing and herbaceous cocktail that's perfect for those who appreciate the bright and botanical flavors of gin. This invigorating libation combines gin with fresh lemon, muddled mint leaves, and sugar, creating a revitalizing and aromatic drink with a balance of sweetness, tartness, and herbal freshness. It's a cocktail that's known for its gin essence and the invigorating coolness of fresh mint, making it a favorite choice for those who want to enjoy a revitalizing sip. Sip on a Gin Smash cocktail and let its vibrant flavors awaken your taste buds.",
  },
  {
    _id: "639b6de9ff77d221f190c5fa",
    drink: "Boxcar",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Boxcar.jpg",
    description:
      "Boxcar is a simple and classic cocktail that's perfect for those who appreciate the straightforward elegance of bourbon-based drinks. This timeless libation combines bourbon with orange liqueur, creating a smooth and balanced sip. It's a cocktail that's known for its simplicity and refined flavors, making it a favorite choice among cocktail connoisseurs. Sip on a Boxcar and savor the uncomplicated charm of this iconic drink.",
  },
  {
    _id: "639b6de9ff77d221f190c551",
    drink: "Pineapple Paloma",
    drinkThumb:
      "https://ftp.goit.study/img/drinkify/recipes/Pineapple_Paloma.jpg",
    description:
      "Pineapple Paloma is a tropical twist on the classic Paloma cocktail. This refreshing drink combines the flavors of tequila, grapefruit juice, lime juice, and the tropical sweetness of pineapple juice. The result is a vibrant and tangy beverage that captures the essence of summer. Savor the tropical flavors of Pineapple Paloma and let it transport you to a sunny beach.",
  },
  {
    _id: "639b6de9ff77d221f190c595",
    drink: "Loch Lomond",
    drinkThumb: "https://ftp.goit.study/img/drinkify/recipes/Loch_Lomond.jpg",
    description:
      "Loch Lomond is a Scottish-inspired cocktail that pays homage to the rich tradition of Scotch whisky. This intriguing drink combines Scotch whisky with a touch of herbal liqueur, creating a unique and flavorful experience. It's a cocktail that's perfect for those who appreciate the bold and complex flavors of Scotch. Raise a glass of Loch Lomond and savor the spirit of Scotland.",
  },
];

const CocktailList = () => {
  return (
    <div className={css["coctails"]}>
      <h1 className={css["title"]}>Cocktails</h1>
      <ul className={css["list"]}>
        {coctails.slice(0, 8).map((el) => (
          <CocktailCard
            key={el._id}
            title={el.drink}
            img={el.drinkThumb}
            desc={el.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
