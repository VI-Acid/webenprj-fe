<template>
  <section class="section text-center">
    <h1 class="mb-12">Help & Support</h1>
    <p class="mb-8">
      Need assistance with Motivise? Below you’ll find useful information and answers to common
      questions.
    </p>

    <div class="text-left">
      <div class="mb-6">
        <h3>🧩 How do I create a post?</h3>
        <p>
          Go to your profile and click the <strong>“+ New Post”</strong> button. You can add an
          image, a caption, and hashtags before publishing.
        </p>
      </div>

      <BaseDivider />

      <div class="mb-6 mt-6">
        <h3>💬 Can I comment or like other posts?</h3>
        <p>
          Yes! Simply click the heart or comment icon below any post to engage with other users.
        </p>
      </div>

      <BaseDivider />

      <div class="mb-6 mt-6">
        <h3>🔒 I forgot my password. What can I do?</h3>
        <p>
          On the login page, click <strong>“Forgot password?”</strong> and follow the instructions
          to reset it via email.
        </p>
      </div>

      <BaseDivider />

      <div class="mb-6 mt-6">
        <h3>📨 Still need help?</h3>
        <p>
          You can reach our support team at
          <a href="mailto:support@motivise.com" class="text-primary-400 underline"
            >support@motivise.com</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseDivider from '@/components/atoms/BaseDivider.vue'
</script>
