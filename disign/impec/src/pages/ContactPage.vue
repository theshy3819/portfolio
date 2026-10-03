<script setup>
import Page from '../components/Page.vue'
defineProps({ meta: Object, contact: Object, num: String, page: Number, total: Number })
const githubHref = (v) => 'https://' + v.replace(/^https?:\/\//, '')
const telHref = (v) => 'tel:' + v.replace(/[^0-9+]/g, '')
</script>

<template>
  <Page id="contact" tone="dark" :num="num" label="Contact" :page="page" :total="total">
    <div class="contact">
      <h2 class="display-xl closing">
        <span v-for="line in contact.closing" :key="line">{{ line }}</span>
      </h2>
      <div class="cta-row">
        <div class="mail">
          <a class="mail-link" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </div>
        <a class="btn btn-accent" :href="`mailto:${contact.email}`">Send an email <span aria-hidden="true">→</span></a>
      </div>
      <hr class="rule" />
      <div class="site-footer">
        <div class="brand">
          <p class="brand-mark">{{ meta.nameEn.toUpperCase() }}</p>
          <p class="mono-meta muted">{{ meta.role }} · {{ meta.date }}</p>
        </div>
        <dl class="info">
          <div><dt class="mono-label muted">Phone</dt><dd><a :href="telHref(contact.phone)">{{ contact.phone }}</a></dd></div>
          <!-- GitHub: 주소가 정해지면 content.js contact.github에 입력 — 비어 있으면 행을 표시하지 않음 -->
          <div v-if="contact.github">
            <dt class="mono-label muted">GitHub</dt>
            <dd><a :href="githubHref(contact.github)">{{ contact.github }}</a></dd>
          </div>
        </dl>
        <a class="to-top mono-label acc" href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.contact {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 56px;
  height: 100%;
}

.display-xl {
  margin-top: 24px;
}

/* 한글 큰 문장: 받침이 겹치지 않게 줄 간격을 넓힘 */
.closing {
  display: grid;
  max-width: 1100px;
  font-size: 116px;
  line-height: 1.14;
  letter-spacing: -0.03em;
}

.cta-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-top: auto;
}

.mail {
  display: grid;
  gap: 10px;
}

.mail-link {
  justify-self: start;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--acc);
  font-family: var(--f-display);
  font-size: 52px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--acc);
}

.site-footer {
  display: grid;
  grid-template-columns: 1.2fr 1.4fr auto;
  gap: 32px;
}

.brand {
  display: grid;
  gap: 10px;
  align-content: start;
}

.brand-mark {
  font-family: var(--f-display);
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.info {
  display: grid;
  gap: 12px;
}

.info div {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
  align-items: baseline;
  font-size: 20px;
}

.to-top {
  align-self: start;
}

@media screen and (max-width: 899px) {
  .cta-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .mail-link {
    font-size: clamp(22px, 6.6vw, 32px);
  }

  .site-footer {
    grid-template-columns: 1fr;
  }

  .closing {
    font-size: clamp(32px, 9vw, 56px);
  }
}

@media print {
  .btn,
  .to-top {
    display: none;
  }
}
</style>
