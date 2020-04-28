<template>
  <div class="container">
    <div class="keyword-container">
      <md-field class="keyword">
        <label>关键词一：</label>
        <md-input v-model="word1"></md-input>
      </md-field>
      <md-field class="connectWord">
        <label>连接词一：</label>
        <md-input v-model="connectWord1"></md-input>
      </md-field>
      <md-field class="breakdown">
        <label>断句1：</label>
        <md-select v-model="breakdown1a" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句2：</label>
        <md-select v-model="breakdown1b" name="breakdown1b" id="breakdown1b">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句3：</label>
        <md-select v-model="breakdown1c" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
    </div>
    <div class="keyword-container">
      <md-field class="keyword">
        <label>关键词二：</label>
        <md-input v-model="word2"></md-input>
      </md-field>
      <md-field class="connectWord">
        <label>连接词：</label>
        <md-input v-model="connectWord2"></md-input>
      </md-field>
      <md-field class="breakdown">
        <label>断句1：</label>
        <md-select v-model="breakdown2a" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句2：</label>
        <md-select v-model="breakdown2b" name="breakdown1b" id="breakdown1b">
          <md-option v-for="length in breakdowns"
                    v-bind:key="length"
                    v-bind:value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句3：</label>
        <md-select v-model="breakdown2c" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
    </div>
    <div class="keyword-container">
      <md-field class="keyword">
        <label>关键词三：</label>
        <md-input v-model="word3"></md-input>
      </md-field>
      <md-field class="connectWord">
        <label>连接词：</label>
        <md-input v-model="connectWord3"></md-input>
      </md-field>
      <md-field class="breakdown">
        <label>断句1：</label>
        <md-select v-model="breakdown3a" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句2：</label>
        <md-select v-model="breakdown3b" name="breakdown1b" id="breakdown1b">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句3：</label>
        <md-select v-model="breakdown3c" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
    </div>
    <div class="keyword-container">
      <md-field class="keyword">
        <label>关键词四：</label>
        <md-input v-model="word4"></md-input>
      </md-field>
      <md-field class="connectWord">
        <label>连接词：</label>
        <md-input v-model="connectWord4"></md-input>
      </md-field>
      <md-field class="breakdown">
        <label>断句1：</label>
        <md-select v-model="breakdown4a" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句2：</label>
        <md-select v-model="breakdown4b" name="breakdown1b" id="breakdown1b">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
      <md-field class="breakdown">
        <label>断句3：</label>
        <md-select v-model="breakdown4c" name="breakdown1a" id="breakdown1a">
          <md-option v-for="length in breakdowns"
                     :key="length"
                     :value="length">
            {{length}}
          </md-option>
        </md-select>
      </md-field>
    </div>
    <md-button class="md-raised md-primary" v-on:click="generateLyrics()">生成</md-button>
    <pre class="lyrics">{{ lyrics }}</pre>
  </div>
</template>

<script>
import { generateLyrics } from '../helpers/generateLyrics';

export default {
  name: 'Main',
  data: function() {
    return {
      word1: '惊雷',
      connectWord1: '这',
      word2: '紫电',
      connectWord2: '我',
      word3: '沙场',
      connectWord3: '将',
      word4: '多情自古空余恨',
      connectWord4: '我自朝天',
      breakdown1a: 4,
      breakdown1b: 4,
      breakdown1c: 3,
      breakdown2a: 4,
      breakdown2b: 4,
      breakdown2c: 3,
      breakdown3a: 4,
      breakdown3b: 5,
      breakdown3c: 0,
      breakdown4a: 3,
      breakdown4b: 0,
      breakdown4c: 0,
      breakdowns: [0, 1, 2, 3, 4, 5, 6, 7],
      lyrics: '',
    };
  },
  methods: {
    generateLyrics: function () {
      this.lyrics = generateLyrics(
        this.word1, this.connectWord1,
        [this.breakdown1a, this.breakdown1b, this.breakdown1c],
        this.word2, this.connectWord2,
        [this.breakdown2a, this.breakdown2b, this.breakdown2c],
        this.word3, this.connectWord3,
        [this.breakdown3a, this.breakdown3b, this.breakdown3c],
        this.word4, this.connectWord4,
        [this.breakdown4a, this.breakdown4b, this.breakdown4c],
      );
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.keyword-container {
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;
}
.breakdown.md-field {
  width: 45px;
}
.md-field {
  width: 50%;
  margin: 8px;
}
.lyrics {
  margin-top: 45px;
  font-size: 24px;
  line-height: 40px;
}
</style>
