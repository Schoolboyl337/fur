<template>
	<div class=" text-white py-20 lol ">
		<div class="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 p-8 text-shadow">
				<p class="text-yellow-300 text-5xl uppercase tracking-loose "><span>Отзыв</span></p>
				<p class="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug"><span>Оставь свою идею!</span></p>
				<p class="text-sm md:text-3xl leading-snug text-gray-50 text-opacity-100">
					<span>Мы читаем каждое сообщение и стараемся сделать свой сайт лучше для вас ...</span>
				</p>
			</div>
			<div class="flex flex-col w-full lg:w-2/3 justify-center">
				<div class="container w-full px-5">
					<div class="flex flex-wrap justify-center">
						<div class="w-full lg:w-6/12 px-5">
							<div
								class="relative flex flex-col min-w-0 break-words w-full mb-6 lg:ml-20 shadow-lg rounded-lg bg-white">
								<div class="flex-auto p-5 lg:p-10">
									<h4 class="text-2xl mb-4 text-black font-semibold">Есть Предложение?</h4>
									<form id="feedbackForm" action="" method="">
										<div class="relative w-full mb-3">
											<label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email">Почта</label><input type="email" name="email" id="email" class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400 placeholder-opacity-75" placeholder="Wubba-lubba-dub-dub"
                        style="transition: all 0.15s ease 0s;" required />
                    </div>
											<div class="relative w-full mb-3">
												<label class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message">Твоя Идея</label><textarea maxlength="300" name="feedback" id="feedback" rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder="" required></textarea>
											</div>
											<div class="text-center mt-6">
												<button id="feedbackBtn"
                        class="bg-green-500 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit" style="transition: all 0.15s ease 0s;">Принять
                      </button>
											</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style>
.lol{
	background-image: url('../../assets/bg-callback.jpg');
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
span{
	text-shadow: 3px 1px black;
}
@media (max-width:900px){
	.lol{
	background-image: url('../../assets/callback.jpg');
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	}
} ;
	

</style>