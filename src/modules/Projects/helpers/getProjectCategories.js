export function getProjectCategories(array) {
    const res = ["All"]

    array.forEach(item => {
        item.tags.forEach(tag => {
            if (!res.includes(tag)) {
                res.push(tag)
            }
        })
    })

    return res
}
