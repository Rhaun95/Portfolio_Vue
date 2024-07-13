<template>
  <div class="dark:bg-black dark:text-gray-50">
    <html lang="de">
      <head>
        <title>Startpage</title>
        <!-- <description>abstract Infomations about me: profile, works and contact</description> -->
        <meta property="og:title" content="Soo_Portfolio"> 
        <meta property="og:url" content="http://localhost:3000/">
        <meta property="og:type" content="website">
        <meta property="og:image" content="@/assets/OG_Startpage.png"> 
        <meta property="og:description" content="Vue Project: own portfolio website">
      </head>
    </html>
  
    <Header/>


    <!-- <Login  class="flex flex-col "/> -->

    <main class="flex flex-col ">
      <section class="flex justify-evenly items-center flex-col flex-grow h-screen">
        <!-- Introduction -->
         
        <div class="text-center mt-16">
          <h1 class="text-6xl font-semibold">SOOHYEON KIM</h1>
          <p class="text-lg mt-4">I am a java developer</p>
        </div>
        <div class="flex justify-center items-center flex-col ">
          <div class="pb-3 text-sm font-bold text-gray-600 dark:text-gray-100">SCROLL DOWN</div>
          <div class="flex justify-center items-center bg-black p-5 rounded-full w-7 h-7 text-white dark:bg-gray-100 dark:text-zinc-700">
            <font-awesome-icon :icon="['fas', 'arrow-down']" />
          </div>
      </div>
      </section>

      <section class="flex-grow h-fit mb-12">
        <SectionTitle title="About Me"/>

        <div class="flex flex-col justify-center items-center ">

            <div class="flex flex-row ml-7">
              
                <div class="mt-14 ">
                    <img src="../assets/Me.jpg" alt="myfoto" class="w-64 rounded-md"/>
                </div>
            
                <div class="flex flex-col mt-5 p-5" >
                    <div class="mt-3 ml-6 text-base">
                        I'm a Java Developer from Hamburg, Germany, passionate about server-side development. 
                        <br>I thrive on team collaboration, embrace new tech, and excel in problem-solving.
                        <br>Let's grow together!
                    </div>
                    
                    <div class="flex">
                        <Profilcard class="w-1/3 p-4" title="Frontend" 
                            languages="JavaScript, TypeScript, Vue, React, Flutter"/> 
                        <Profilcard class="w-1/3 p-4" title="Backend" 
                            languages="Java, Spring Boot, Docker, JPA, Mybatis"/>
                        <Profilcard class="w-1/3 p-4" title="Database" languages="MySQL, MariaDB, SQL"/>       
                    </div>
                </div>
            </div>
            
            <div class="mt-6 flex flex-col ">
                <div class="text-2xl font-bold text-gray-700 uppercase ">
                    Latest Project
                </div>
                <hr class=" my-4 border-gray-300">

                <div class="flex justify-around items-center">
                    <div class="  text-center font-bold px-2">
                        Mobile Box Task
                        <p class="text-sm font-normal ">App</p>
                    </div>
                    <div class="  text-gray-500 w-3/5">
                        IVIS(In-Vehicle Information System)-Display evaluation method "Box Task" used in a mobile environment
                    
                        <p class=" text-sm ">
                        Skills: Flutter, Node.js, Express, socket.io, JavaScript
                        </p>
                    </div>
                    <div class="pl-3">
                        <div class="">2023</div>
                        
                    </div>
                </div>
            </div>

        </div>
      </section>

      <section  class=" my-12 flex-grow h-fit">

          <SectionTitle title="GitHub"/>
          <GitHub class="  overflow-hidden"/>
     
      </section>


      <section class="mt-6 flex-grow h-fit">
        
        <SectionTitle title="Contact"/> 
        <div class=" ">
          
          <Form @submit="onSubmit" class="flex flex-col justify-center items-center w-full">
      
            <label id="emailLabel" for="email" class="flex flex-col justify-center items-center w-full"> <span class="hidden">Email</span>
              <input v-model="email" v-bind="emailAttrs" id="email" type="email"  class="w-1/3 p-2 mt-5 border border-gray-700 rounded-md text-black" placeholder="E-Mail"/>
              <div>{{ errors.email }}</div>
            </label>

            <label id="subjectLabel" for="subject" class="flex flex-col justify-center items-center w-full"> <span class="hidden">subject</span>
              <input v-model="subject" id="subject" type="text" class="text-black dark:text-gray-100 w-1/3 p-2 mt-5 border border-gray-700 rounded-md" placeholder="subject (optional)"/>
            </label>

            <label id="messageLabel" for="message" class="flex flex-col justify-center items-center w-full"> <span class="hidden">message</span>
              <textarea v-model="message" v-bind="messageAttrs" id="message" 
                        class="w-1/3 h-80 p-2 mt-5 border border-gray-700 rounded-md
                         text-black dark:text-gray-100 resize-none" 
                        placeholder="Message" />
              <div>{{ errors.message }}</div>
            </label>

            <button type="submit" class="w-20 h-12 mt-4 rounded-lg bg-sky-900 text-red-50 text-lg">Send</button>
          </Form>
        </div>

      </section>

    </main>


  </div>
</template>

<script setup lang="ts">
  import {Form, useForm, validate} from 'vee-validate';
  import {toTypedSchema} from "@vee-validate/zod";
  import {z} from 'zod';
  import { useRouter } from 'vue-router';

  const mail = useMail();

  // const sendMail = async () => {
  //   try {
  //     await mail.send({
  //         from: 'TESTER@gmail.com',
  //         subject: 'test',
  //         text: 'This is an incredible test message',
  //       })
  //       alert('Email sent successfully')
  //   } catch (error) {
  //     console.error('Error sending email', error)
  //   }
  // }

  const { errors, defineField, handleSubmit } = 
    useForm({
      validationSchema: toTypedSchema(
        z.object({
          email: z.string().email(),
          message: z.string().min(30),
          subject: z.string().optional(),
      }))
    });


    const [email, emailAttrs] = defineField('email');
    const [message, messageAttrs] = defineField('message');
    const [subject] = defineField('subject');
    

    const onSubmit = handleSubmit(async () => {
      try {

  
          await validate();

          const {data, error} = await useFetch('api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email: email.value,
                subject: subject.value || null,
                message: message.value,
              })
          });

          await mail.send({
            fromPlainHandler: email.value,
            from: email.value,
            subject: subject.value || null,
            text: `From ${email.value}\n\n${message.value}`,
          })

          
        alert('Successfull!! Server antwortete mit ' + JSON.stringify(data.value));
        
      } catch (error) {
        alert('Transfer failed: ' + error); // Übertragung fehlgeschlagen
      }
    });



</script>



