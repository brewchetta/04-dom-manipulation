// CREATING ELEMENTS
const memesContainer = document.querySelector("#memes-container")

function addCatMeme(memeURL) {
    // 1. Create the element based on the type of element we want
    const newImg = document.createElement("img")
    
    // 2. Add texture - changing different attributes
    // for ex. adding style, changing text content, changing the src
    newImg.src = memeURL

    // 3. Put the element somewhere
    // with append I am adding the new item to the container
    memesContainer.append( newImg )
    // append will add this as the LAST child

    // memesContainer.prepend()
    // prepend will add the child as the FIRST child
}

catMemes.forEach( memeObj => addCatMeme( memeObj.img_url ) )

// EXERCISES

// 1. Create a new <ol> called `cat-meme-names`

const catMemeNamesOL = document.createElement("ol")
catMemeNamesOL.id = "cat-meme-names"
document.body.append( catMemeNamesOL )

// 2. Loop over all the cat memes and create a <li> with the textContent of that cat meme's `name` attribute

// 1. Loop over the cat memes
// 2. For each create an li
// 3. change the li's text content to that meme's `name` attribute
// 4. Put the meme in the ol

function addMemeName( name ) {
    const li = document.createElement("li")
    li.textContent = name
    catMemeNamesOL.append( li )
}

catMemes.forEach( memeObj => addMemeName(memeObj.name) )

// ADDITIONAL EXERCISES

// 1. Create a <nav> element and PREPEND it to the page.

// 2. Create three <a> elements, "Home", "About", "Contact Us". These should all have an href="#" so that they link back to the current page. Append them to the <nav> element.

// 3. Create a <button> that reads "Replace All Images" and append it to the page.

// 4. When the <button> with "Replace All Images" is clicked, it replaces the `src` attribute for every image on the page with an image of your choice.

// 5. Create a <footer> element. Give it a display of "grid" and a gridTemplateColumns of "1fr 1fr". Append it to the body.

// 6. Create two <p> elements. Inside one add copyright information and inside the other add a phone number (make one up). Append both of them to the <footer> element.

// RETURN AT 4:20 EST