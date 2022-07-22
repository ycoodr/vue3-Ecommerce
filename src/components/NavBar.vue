<template>
<ul>
    <li>
        <router-link to="/">Products</router-link>
    </li>
    <li>
        <router-link to="/cart">Shopping cart ({{ numberOfItems }})</router-link>
    </li>
    <li>
        <router-link to="/user-info">Edit my info</router-link>
    </li>
</ul>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['numberOfItems'],
}
</script>