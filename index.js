const section = document.getElementById("section")

let postContainer

function renderPage () {
    for (let postNumber = 0; postNumber < posts.length; postNumber++) {
        renderPost(posts[postNumber])
    }
}

function renderPost(post) {
    createPostContainer()
    createAuthorSection(post)
    createPostPhoto(post)
    createReactions(post)
    create_renderLikes(post)
    createCommentField(post)
}

function createPostContainer() {
    postContainer = document.createElement("div")
        postContainer.className = "post-container"
        section.append(postContainer)
}

function createAuthorSection(post) {
    const authorSection = document.createElement("div")
        authorSection.className = "author-section"
        postContainer.append(authorSection)
        authorSection.append(createAuthorAvatar(post))
        authorSection.append(createAuthorInfo(post))
}

function createAuthorAvatar(post) {
    const authorAvatar = document.createElement("img")
        authorAvatar.className = "avatar"
        authorAvatar.src = post.avatar
        authorAvatar.alt = "author's avatar";
    return authorAvatar;
}

function createAuthorInfo(post) {
    const authorInfo = document.createElement("div")
        authorInfo.className = "author-info"
    
    const authorName = document.createElement("p")
        authorName.className = "bolded"
        authorName.textContent = `${post.name}`
        authorInfo.append(authorName)
    
    const authorLocation = document.createElement("p")
        authorLocation.className = "small-size"
        authorLocation.textContent = `${post.location}`
        authorInfo.append(authorLocation)

    return authorInfo
}

function createPostPhoto(post) {
    const postPhoto = document.createElement("img")
        postPhoto.className = "post-photo"
        postPhoto.src = `${post.post}`
        postPhoto.alt = "user's post"
        postPhoto.style.backgroundImage = `${post.post}`
        postContainer.append(postPhoto)
}

function createReactions(post) {
    const iconsContainer = document.createElement("div")
        iconsContainer.className = "icons-container"
        postContainer.append(iconsContainer)

    const likeIcon = document.createElement("img")
        likeIcon.id = `likeIcon${post.id}`
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

function create_renderLikes(post) {
    const likesInfo = document.createElement("p")
        likesInfo.className = "likes-info bolded"
        likesInfo.id = `likesInfo${post.id}`
        postContainer.append(likesInfo)
    renderLikes(post, likesInfo)

    const likeBtn = document.getElementById(`likeIcon${post.id}`)
    let likeBtnUse = "no"
    likeBtn.addEventListener("click", function() {
        if (likeBtnUse === "used") {
            post.likes -= 1
            renderLikes(post, likesInfo)
            likeBtn.style.backgroundColor = "#fff"
            likeBtnUse = "no"
        }
        else {
            post.likes += 1
            renderLikes(post, likesInfo)
            likeBtn.style.backgroundColor = "#ededed"
            likeBtnUse = "used"
        }
    })
}

function renderLikes(post, likesInfo) {
    let formatedLikes = new Intl.NumberFormat("pl-PL").format(post.likes)
    likesInfo.textContent = `${formatedLikes} likes`
}

function createCommentField(post) {
    const commentField = document.createElement("p")
        commentField.className = "comment-field"
        postContainer.append(commentField)
    
    const username = document.createElement("span")
        username.className = "bolded"
        username.textContent = `${post.username}`
        commentField.append(username)
    
    const commentText = document.createElement("span")
        commentText.textContent = ` ${post.comment}`
        commentField.append(commentText)
}


// posts' content
const posts = [
    {
        id: 0,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21854
    },
    {
        id: 1,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 44763
    },
        {
        
        id: 2,
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