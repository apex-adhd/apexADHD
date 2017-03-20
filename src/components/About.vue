<template>
<div >
	<div class="row">
		<div class="box">
			<div class="col-lg-12">
				<div class="h2" style="text-align:justify;">
					Providing one-on-one coaching, group training, and ADHD awareness around the world!
				</div>
			</div>
			<div class="col-lg-8">

				<div class="h3" style="text-align:justify;">
					All of our programs are conducted via Skype or over the phone so you can receive training from us anywhere in the 
					world from the comfort of your own home. This also let's us get you into action on achieving your 
					goals DURING the coaching session!
				</div>
				<blockquote class="blockquote">
				  <p class="mb-0">&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&rdquo;</p>
				</blockquote>
			</div>	
			<div class="col-lg-4">
				<iframe class="intro-video" src="https://www.youtube.com/embed/nGeKSiCQkPw" frameborder="0" allowfullscreen></iframe>
			</div>
		</div>
	</div>
  	<div class="brand">Apex ADHD</div>
	<div class="address-bar">The Goal Focused ADHD Training Company </div>
	    <nav class="navbar navbar-default" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->
                <a class="navbar-brand" href="index.html">Apex ADHD</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/" >Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/packages">Packages</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</div>
</template>
<style scoped></style>
<script>
	export default{
		data(){
			return{
				msg: 'betsy'
			}
		},
		created(){
			console.log("about page")
		}
	}
</script>