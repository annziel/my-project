const section = document.getElementById("section")

let postContainer
let postNumber

function renderPage () {
    for (let postNumber = 0; postNumber < posts.length; postNumber++) { 
        createPostContainer()
        createAuthorSection(postNumber)
        createPostPhoto(postNumber)
        createReactions(postNumber)
        create_renderLikes(postNumber)
        createCommentField(postNumber)
    }
}

function createPostContainer() {
    postContainer = document.createElement("div")
    postContainer.className = "post-container"
    section.append(postContainer)
}

function createAuthorSection(postNumber) {
    const authorSection = document.createElement("div")
    authorSection.className = "author-section"
    postContainer.append(authorSection)
    authorSection.append(createAuthorAvatar(postNumber))
    authorSection.append(createAuthorInfo(postNumber))
}

function createAuthorAvatar(postNumber) {
    const authorAvatar = document.createElement("img")
    authorAvatar.className = "avatar"
    authorAvatar.src = posts[postNumber].avatar
    authorAvatar.alt = "author's avatar";
    return authorAvatar;
}

function createAuthorInfo(postNumber) {
    const authorInfo = document.createElement("div")
    authorInfo.className = "author-info"
    
    const authorName = document.createElement("p")
    authorName.className = "bolded"
    authorName.textContent = `${posts[postNumber].name}`
    authorInfo.append(authorName)
    
    const authorLocation = document.createElement("p")
    authorLocation.className = "small-size"
    authorLocation.textContent = `${posts[postNumber].location}`
    authorInfo.append(authorLocation)

    return authorInfo
}

function createPostPhoto(postNumber) {
    const postPhoto = document.createElement("img")
    postPhoto.className = "post-photo"
    postPhoto.src = `${posts[postNumber].post}`
    postPhoto.alt = "user's post"
    postPhoto.style.backgroundImage = `${posts[postNumber].post}`
    postContainer.append(postPhoto)
}

function createReactions(postNumber) {
    const iconsContainer = document.createElement("div")
    iconsContainer.className = "icons-container"
    postContainer.append(iconsContainer)

    const likeIcon = document.createElement("img")
        likeIcon.id = `likeIcon${postNumber}`
        likeIcon.className = "reactions"
        likeIcon.src = "images/icon-heart.png"
        likeIcon.alt = "like icon"
        iconsContainer.append(likeIcon)
        
        const commentIcon = document.createElement("img")
        commentIcon.className = "reactions"
        commentIcon.src = "images/icon-comment.png"
        commentIcon.alt = "comment icon"
        iconsContainer.append(commentIcon)
        
        const shareIcon = document.createElement("img")
        shareIcon.className = "reactions"  
        shareIcon.src = "images/icon-dm.png"
        shareIcon.alt = "share icon"
        iconsContainer.append(shareIcon)
}

function create_renderLikes(postNumber) {
    const likesInfo = document.createElement("p")
    likesInfo.className = "likes-info bolded"
    likesInfo.id = `likesInfo${postNumber}`
    postContainer.append(likesInfo)
    renderLikes(postNumber, likesInfo)

    const likeBtn = document.getElementById(`likeIcon${postNumber}`)
    let likeBtnUse = "no"
    likeBtn.addEventListener("click", function() {
        if (likeBtnUse === "used") {
            posts[postNumber].likes -= 1
            renderLikes(postNumber, likesInfo)
            likeBtn.style.backgroundColor = "#fff"
            likeBtnUse = "no"
        }
        else {
            posts[postNumber].likes += 1
            renderLikes(postNumber, likesInfo)
            likeBtn.style.backgroundColor = "#ededed"
            likeBtnUse = "used"
        }
    })
}

function renderLikes(postNumber, likesInfo) {
    let formatedLikes = new Intl.NumberFormat("pl-PL").format(posts[postNumber].likes)
    likesInfo.textContent = `${formatedLikes} likes`
}

function createCommentField(postNumber) {
    const commentField = document.createElement("p")
    commentField.className = "comment-field"
    postContainer.append(commentField)
    
    const username = document.createElement("span")
    username.className = "bolded"
    username.textContent = `${posts[postNumber].username}`
    commentField.append(username)
    
    const commentText = document.createElement("span")
    commentText.textContent = ` ${posts[postNumber].comment}`
    commentField.append(commentText)
}


// posts' content
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21854
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 44763
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15998
    }
]

renderPage()