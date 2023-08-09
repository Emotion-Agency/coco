<script setup lang="ts">
import { pageTransition } from '~~/assets/scripts/transition'

definePageMeta({
  pageTransition,
})
</script>

<template>
  <main>
    <section class="grid container returns">
      <h1 class="returns__main-title">Returns & Exchanges</h1>
      <div class="returns__wrapper">
        <div class="returns__content-wrapper">
          <h2 class="returns__title">POLICY</h2>
          <p class="returns__desc">
            All chokers and pouches must be in their original condition, with
            tags attached. Chokers that have been worn, soiled, or altered in
            any way will not be accepted. If we receive such non-qualifying
            items, we will simply return them to you. Be sure to understand the
            above criteria prior to sending the package to us. There are no
            exceptions.
          </p>
        </div>
        <div class="returns__content-wrapper">
          <h2 class="returns__title">RETURNS</h2>
          <p class="returns__desc">
            We offer a 10-day window for returns. Email us within 10 calendar
            days from your delivery date, and we'll take it back. All return and
            original shipping charges are the responsibility of the customer.
          </p>
        </div>
        <div class="returns__content-wrapper">
          <h2 class="returns__title">EXCHANGES</h2>
          <p class="returns__desc">
            We offer a 10 day window for exchanges. Email or call us within 10
            calendar days form your delivery date on exchange details and we'll
            let you know of available stock. Customer is responsible for cost of
            shipping back to RelivebyCoco. RelivebyCoco will send back exchanges
            free of charge (US only) via USPS shipping. This is a one-time
            allowance for all new purchases. Regular rates apply for customers
            who desire express / international shipping in addition to multiple
            exchanges for the same purchase order.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
