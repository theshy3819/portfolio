<script setup>
import Page from '../components/Page.vue'
import Icon from '../components/Icon.vue'
import photo from '../assets/running.jpg' // 프로필 사진: 달리는 모습(배번은 흐리게 처리)

defineProps({ meta: Object, profile: Object, contact: Object, history: Object, page: Number, total: Number })
const githubHref = (v) => 'https://' + v.replace(/^https?:\/\//, '')
const telHref = (v) => 'tel:' + v.replace(/[^0-9+]/g, '')
</script>

<template>
  <Page id="profile" tone="dark" num="(01)" label="Profile" :page="page" :total="total">
    <div class="profile">
      <aside class="id">
        <img class="photo" :src="photo" alt="달리고 있는 송호영" width="800" height="1200" />
        <p class="id-name">{{ meta.name }} <span class="mono-label muted">{{ meta.nameEn }}</span></p>
        <dl class="contact-list">
          <div>
            <dt class="mono-label muted">Phone</dt>
            <dd><a :href="telHref(contact.phone)">{{ contact.phone }}</a></dd>
          </div>
          <div>
            <dt class="mono-label muted">E-mail</dt>
            <dd><a :href="`mailto:${contact.email}`">{{ contact.email }}</a></dd>
          </div>
          <!-- GitHub: 주소가 정해지면 content.js contact.github에 입력 — 비어 있으면 행을 표시하지 않음 -->
          <div v-if="contact.github">
            <dt class="mono-label muted">GitHub</dt>
            <dd><a :href="githubHref(contact.github)">{{ contact.github }}</a></dd>
          </div>
        </dl>
      </aside>

      <div class="main">
        <h2 class="heading-md">{{ profile.intro_headline }}</h2>
        <p v-if="profile.intro" class="kr-body intro">{{ profile.intro }}</p>

        <div class="cols">
          <section>
            <h3 class="block-title mono-label">Awards</h3>
            <ul class="rows">
              <li v-for="a in history.awards" :key="a.title" class="award">
                <span class="when mono-meta">{{ a.when }}</span>
                <span>
                  <Icon name="trophy" class="acc" />
                  <strong>{{ a.title }}</strong>
                  <span class="row-sub">{{ a.org }}</span>
                </span>
              </li>
            </ul>
          </section>
          <section>
            <h3 class="block-title mono-label">Certificates</h3>
            <ul class="rows">
              <li v-for="c in history.certificates" :key="c.name">
                <span class="when mono-meta">{{ c.kind }}</span>
                <strong>{{ c.name }}</strong>
              </li>
            </ul>
          </section>
          <section class="wide">
            <h3 class="block-title mono-label">Education / Experience</h3>
            <ul class="rows">
              <li v-for="e in history.education" :key="e.title">
                <span class="when mono-meta">{{ e.when }}</span>
                <span>
                  <strong>{{ e.title }}</strong>
                  <span v-if="e.sub" class="row-sub">{{ e.sub }}</span>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 80px;
  height: 100%;
  align-items: start;
}

.id {
  display: grid;
  gap: 20px;
}

.photo {
  display: block;
  width: 240px;
  height: auto;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
  object-fit: cover;
  object-position: 50% 40%;
}

.id-name {
  display: grid;
  gap: 4px;
  font-family: var(--f-display);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.contact-list {
  display: grid;
  gap: 10px;
}

.contact-list dd {
  margin-top: 2px;
  font-family: var(--f-display);
  font-size: 17px;
}

.contact-list a {
  text-decoration: underline;
  text-decoration-color: var(--rule);
  text-underline-offset: 0.25em;
}

.main {
  display: grid;
  gap: 24px;
  align-content: start;
}

.intro {
  max-width: 62em;
  color: var(--fg-muted);
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 52px 48px;
  margin-top: 4px;
}

.wide {
  grid-column: 1 / -1;
}

.block-title {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--fg);
}

.rows li {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 16px;
  align-items: baseline;
  padding: 20px 0;
  border-bottom: 1px solid var(--rule);
  font-size: 20px;
}

.rows strong {
  font-weight: 600;
}

.when {
  color: var(--fg-muted);
}

.rows li.award {
  grid-template-columns: 72px 1fr;
}

.main .heading-md {
  font-size: 54px;
}

.intro {
  font-size: 21px;
}

.award strong {
  color: var(--acc);
}

.award .icon {
  margin-right: 6px;
  vertical-align: -2px;
}

.row-sub {
  display: block;
  margin-top: 4px;
  font-size: 16px;
  color: var(--fg-muted);
}

@media screen and (max-width: 899px) {
  .profile {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .photo {
    width: 180px;
  }

  .cols {
    grid-template-columns: 1fr;
  }

  .rows li {
    grid-template-columns: 84px 1fr;
  }
}
</style>
